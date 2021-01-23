import json
import logging
import traceback
import subprocess

logger = logging.getLogger("django")

class RunCommand:
    def __init__(self):
        self.response = dict()

    def run(self) -> dict:
        try:

            return self.response
        except:
            self.response["Traceback"] = traceback.format_exc().splitlines()[-1]
            self.response["Messages"] = "This error is out of scope."
            logger.error(traceback.format_exc())
            return self.response
