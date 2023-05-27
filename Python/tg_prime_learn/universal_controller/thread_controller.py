class TC:
    processes: dict = {}

    @staticmethod
    def wait_all_threads(logId) -> None:
        for x in TC.processes[logId]:
            x.join()

    @staticmethod
    def init_thread_worker(logId):
        if TC.check_current_identifier_loaded(logId):
            return
        TC.processes[logId] = []

    @staticmethod
    def add_thread_target(logId, thread_target) -> None:
        TC.init_thread_worker(logId)

        TC.processes[logId].append(thread_target)
        TC.processes[logId][len(TC.processes[logId]) - 1].start()

    @staticmethod
    def check_current_identifier_loaded(logId) -> bool:
        result = TC.processes.get(logId) is not None
        return result

    @staticmethod
    def delete_by_logId(logId: str) -> None:
        if TC.check_current_identifier_loaded(logId):
            for x in TC.processes[logId]:
                del x
            del TC.processes[logId]
