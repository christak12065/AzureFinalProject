import os

settings = {
    'host': os.environ.get('ACCOUNT_URI','https://acctdbadmin.documents.azure.com:443/'),
    'master_key': os.environ.get('ACCOUNT_KEY','6NAJ8BbVV0qxY8MgJXbsK2h4vrSb1UiTYh74gsrpkqJiqEUXSfMBG7b97i2vdngij7ee4wsEAqtCA5DSSenRIw=='),
    'database_id': os.environ.get('COSMOS_DATABASE','database_id'),
    'container_id': os.environ.get('COSMOS_CONTAINER','Container_id'),
}
