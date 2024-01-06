import alt_path
from _import import *
import uvicorn
from fastapi import FastAPI, Request, status
from fastapi.responses import RedirectResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from fastapi.encoders import jsonable_encoder

import _global

import file.list

app = FastAPI(dependencies=[Depends(auth.get_login)])
_global.app = app

app.include_router(file.list.router)

app.add_middleware(CORSMiddleware, allow_origins=_global.cfg.cors, allow_credentials=True,
                   allow_methods=["*"], allow_headers=["*"])


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    error = exc.errors()[0]
    msg = error['msg'] + ':' + error['loc'][-1]
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content=jsonable_encoder({"detail": msg}),
    )


@app.on_event("startup")
async def startup_event():
    pass


@app.get("/")
async def root():
    return RedirectResponse('/redoc')


if __name__ == '__main__':
    uvicorn.run('main:app', host='0.0.0.0', port=_global.cfg.port,
                reload=True, reload_dirs=[alt.cfg.main_dir()])
