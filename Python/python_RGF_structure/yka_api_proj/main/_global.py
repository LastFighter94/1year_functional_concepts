import alt_path
from _import import *
from _types.user import User

app = None
cfg = alt.cfg.read()

login_last_bad_dt = 0
users = {}
for user in cfg.users:
    users[user.login] = User(**user)


