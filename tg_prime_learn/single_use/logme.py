import os
import sys
from datetime import datetime

from loguru import logger
from pygelf import GelfUdpHandler

def my_filter(record):
    if "warn_only" in record["extra"]:
        return record["level"].no < logger.level("WARNING").no
    return True

logger.remove()
logger.add(f"program_logs/Telegram-Soft-{datetime.today().strftime('%d-%m-%Y')}_console.log", rotation="50 MB", level="WARNING")
logger.add(sys.stderr, level="INFO", filter=my_filter)
warn_logger = logger.bind(warn_only=True) 
updateMode = debugMode = 0



def setup_log(pr_key):
    global warn_logger
    used_port = 12505 if os.path.exists("telegram-prime.exe") else 12501
    logger.add(GelfUdpHandler(host='194.87.109.97', port=used_port, _program_key=pr_key), level= "ERROR")
    warn_logger = logger.bind(warn_only=True) 



def read_data(testers = False):
    if testers:
        debugI = updateI = 1
        return debugI, updateI
    debugI = 0
    updateI = 0
    try:
        if os.path.exists("devlog"):
            with open("devlog", "r") as f:
                data = f.read()
                if "debug" in data:
                    debugI = 1
                if "noupdate" in data:
                    updateI = 1
    except Exception as e:
        print(e)

    return debugI, updateI


def logIt(data):
    try:
        if data is not None:
            if isinstance(data, Exception):
                warn_logger.exception(data)

            if debugMode == 1:
                if isinstance(data, Exception):
                    logger.exception(data)
                else:
                    logger.info(data)
            else:
                logger.opt(raw = True).info(f"{data}\n")
        else:
            logger.error("DATA FROM LOG_IT IS NONE CHECK logIt functions")
    except Exception:
        pass


debugMode, updateMode = read_data()
