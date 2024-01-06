import alt_path
from _import import *
import _global

method = alt.file.name(__file__)
path = alt.file.dir(__file__)
path = path[path.find('/main/'):]
router = APIRouter(prefix=path[5:-1])


class Res(Strict):
    files: List[str]


@router.get(
    '/' + method,
    response_model=Res,
    summary='File list'
)
async def main(dir: str, login=Depends(auth.get_login)):

    files = glob.glob(dir + '/*')

    return Res(files=files)
