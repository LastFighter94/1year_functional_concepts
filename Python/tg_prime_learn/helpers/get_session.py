import ujson as json
import codecs
import os


class JsonGetInfo:
    @staticmethod
    def read_json(json_path: str) -> str:
        with codecs.open(json_path, "r", "utf-8") as F:
            return json.load(F)

    @staticmethod
    def write_to_json(json_path: str, data) -> None:
        if not isinstance(data, str):
            data = json.dumps(data)
        with codecs.open(json_path, "w", "utf-8") as temp:
            temp.write(data)


def file_exist(fname) -> bool:
    if fname is None:
        return False
    return os.path.exists(fname)


def get_session(session, unusual_path=False):
    if file_exist(f'sessions//{session}.json'):
        try:
            json_path = 'sessions//{}.json'.format(session)
            return JsonGetInfo.read_json(json_path)
        except:
            return None