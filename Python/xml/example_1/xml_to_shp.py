import glob
import untangle
import arm.xml
from alt.dict_ import dict_

_send_dir = 'xml_для_отправки/'

def xml_get_list_value(xml, attr):
    if not hasattr(xml, attr):
        return []
    value = getattr(xml, attr)
    if isinstance(value, list):
        return value
    return [value]

xml_files = glob.glob(_send_dir + '*.xml')

data = []

#################################################################

def xml_coord(xml):
    if not (hasattr(xml, 'вд_град') and hasattr(xml, 'вд_мин')):
        return None, None, None

    xg = float(xml.вд_град.cdata) + \
         float(xml.вд_мин.cdata) / 60

    yg = float(xml.сш_град.cdata) + \
         float(xml.сш_мин.cdata) / 60

    return xg, yg

#################################################################

xml_file = xml_files[0]
print(xml_file)

xml = untangle.parse(xml_file)
points = []
lines = []
polygons = []

for passport in xml.xml.паспорт_гкм:
    uchs = arm.xml.value(passport, 'участки_недр.участок_недр', [])

    for uch in uchs:
        objs = arm.xml.value(uch, 'объекты_координат_участка.объект_координат_участка', [])
        for obj in objs:
            obj_data = dict_(passport_rgf=arm.xml.value(passport, 'номер_паспорта_РГФ', ))

            if obj.тип == 'точка':
                obj_data.points = xml_coord(obj.центр)
                points.append(xml_coord(obj.центр)) # добавить в points словарик

            if obj.тип == 'полигон' or obj.тип == 'линия':
                rings = []
                for part in arm.xml.value(obj, 'координаты.часть', []):
                    ring = []
                    for point in arm.xml.value(part, 'точка', []):
                        ring.append(xml_coord(point))
                    if ring[0] != ring[-1] and obj.тип == 'полигон':
                        ring.append(ring[0])
                    rings.append(ring)
                polygons.append(rings)