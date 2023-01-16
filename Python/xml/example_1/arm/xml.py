def value(xml, path, default=None):
    for attr in path.split('.'):
        print(attr)
        xml = getattr(xml, attr, None)
        if xml is None:
            return default
    if isinstance(default, str):
        if isinstance(xml, list):
            return xml[0].cdata
        else:
            return xml.cdata
    elif isinstance(default, list):
        if not isinstance(xml, list):
            return [xml]
        else:
            return xml
    else:
        return xml.cdata.replace('\n', ' ').strip()