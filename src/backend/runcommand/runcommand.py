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
            chrootCmd = 'chroot /host'
            p = subprocess.Popen(
                    chrootCmd, 
                    shell=True, 
                    stdin=subprocess.PIPE, 
                    stdout=subprocess.PIPE, 
                    stderr=subprocess.PIPE
            )
            if '\n' not in command:
                command = command + '\n'

            stdout, stderr = p.communicate(input=command.encode())
            stdout = stdout.decode()
            stderr = stderr.decode()
            logger.info(stdout)
            logger.info(stderr)
            self.response['stdout'] = stdout
            self.response['stderr'] = stderr
            return self.response
        except Exception as e:
            raise e
