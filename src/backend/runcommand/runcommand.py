import json
import logging
import traceback
import subprocess

logger = logging.getLogger('django')

class RunCommand:
    def __init__(self):
        self.response = dict()

    def run(self, command) -> dict:
        try:
            result = subprocess.run(
                command.split(),
                capture_output = True,
                text = True
            )
            logger.info(result.stdout)
            logger.info(result.stderr)
            self.response['stdout'] = str(result.stdout)
            self.response['stderr'] = str(result.stderr)
            return self.response
        except Exception as e:
            raise e
