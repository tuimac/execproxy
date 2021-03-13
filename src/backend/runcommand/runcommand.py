import json
import os
import logging
import traceback
import subprocess

logger = logging.getLogger('django')

class RunCommand:
    def __init__(self):
        self.response = dict()

    def run(self, command) -> dict:
        try:
            chrootCmd = 'chroot ' + os.getenv('HOST_MOUNTED_DIR')
            p = subprocess.Popen(
                    chrootCmd, 
                    shell=True, 
                    stdin=subprocess.PIPE, 
                    stdout=subprocess.PIPE, 
                    stderr=subprocess.PIPE
            )

            stdout, stderr = p.communicate(input=command.encode())
            stdout = stdout.decode()
            stderr = stderr.decode()
            logger.info(stdout)
            logger.info(stderr)
            self.response['stdout'] = stdout
            self.response['stderr'] = stderr
        except Exception as e:
            self.response['exception'] = traceback.format_exc()
            raise e
        finally:
            return self.response
