# -*- coding: utf-8 -*-
import threading
from typing import Any




class DictObject:
    def __init__(self) -> None:
        self.dict_object = {}
        self.object_container = threading.Lock()
        

    def __del__(self) -> None:
        del self.dict_object
        del self.object_container
        

    def add_to(self, name, obj) -> None:
        # self.object_container.acquire()
        if self.dict_object.get(name) is None:
            self.dict_object[name] = []
            self.dict_object[name].append(obj)
        else:
            self.dict_object[name].append(obj)
        # self.object_container.release()
        

    def just_init_with_zero(self, obj) -> None:
        for x in obj:
            self.dict_object[x] = 0


    def get_min(self):
        self.object_container.acquire()

        result = min(self.dict_object, key=lambda unit: self.dict_object[unit])
        self.dict_object[result] = self.dict_object[result] + 1

        self.object_container.release()
        return result


class ArrayObject:
    def __init__(self) -> None:
        self.all_object = []
        self.locker = threading.Lock()
        

    def __del__(self) -> None:
        del self.all_object
        del self.locker
        

    def get_object(self, popIt = False):
        if popIt:
            self.locker.acquire()
            if len(self.all_object) == 0:
                self.locker.release()
                return None
            self.locker.release()
            return self.all_object.pop()

            

        if (len(self.all_object)) == 0:
            return None

        self.locker.acquire()
        result = min(self.all_object, key = lambda unit: self.all_object[unit])
        self.all_object[result] = self.all_object[result] + 1
        self.locker.release()
        return result

class GlobalObjectsCarry:
    big_dictionary_data : dict[str | DictObject] = {}
    big_dictionary_data_array : dict[str | ArrayObject] = {}

    @staticmethod
    def destroy_by_log_id(logId):
        if GlobalObjectsCarry.big_dictionary_data.get(logId):
            del GlobalObjectsCarry.big_dictionary_data[logId]

        if GlobalObjectsCarry.big_dictionary_data_array.get(logId):
            del GlobalObjectsCarry.big_dictionary_data_array[logId]

    @staticmethod
    def create_array_object(key):
        GlobalObjectsCarry.big_dictionary_data_array[key] = ArrayObject()    
    
    @staticmethod
    def array_get_object(key, pop_it = False):
        return GlobalObjectsCarry.big_dictionary_data_array[key].get_object(pop_it)

    @staticmethod
    def rewrite_array_object(key, value, reverse = False):
        GlobalObjectsCarry.big_dictionary_data_array[key] = ArrayObject()    
        GlobalObjectsCarry.big_dictionary_data_array[key].all_object = value 
        if reverse:
            GlobalObjectsCarry.big_dictionary_data_array[key].all_object.reverse()

    @staticmethod
    def get_from_array(key):
        return GlobalObjectsCarry.big_dictionary_data_array[key].all_object 
    
    @staticmethod
    def remove_from_array(key, value):
        return GlobalObjectsCarry.big_dictionary_data_array[key].all_object.remove(value) 

    @staticmethod
    def pop_from_array(key):
        return GlobalObjectsCarry.big_dictionary_data_array[key].all_object.pop()
    
    @staticmethod
    def in_array(key, value) -> bool:
        return value in GlobalObjectsCarry.big_dictionary_data_array[key].all_object 

    @staticmethod
    def get_array_len(key) -> int:
        return len(GlobalObjectsCarry.big_dictionary_data_array[key].all_object)

    @staticmethod
    def add_to_array(key, value):
        GlobalObjectsCarry.big_dictionary_data_array[key].all_object.append(value) 



    @staticmethod
    def in_dict_array(key, key_dict, value) -> bool:
        return value in GlobalObjectsCarry.big_dictionary_data[key].dict_object[key_dict] 

    @staticmethod
    def create_dict_object(key):
        GlobalObjectsCarry.big_dictionary_data[key] = DictObject()

    @staticmethod
    def create_dict_t_object(key, inst_class):
        GlobalObjectsCarry.big_dictionary_data[key] = inst_class()

    @staticmethod
    def get_dict_t_object(key):
        return GlobalObjectsCarry.big_dictionary_data[key]

    @staticmethod
    def get_min(key):
        return GlobalObjectsCarry.big_dictionary_data[key].get_min()

    @staticmethod
    def get_dict_len(key, key_dict)->int:
        return len(GlobalObjectsCarry.big_dictionary_data[key].dict_object[key_dict])

    @staticmethod
    def create_array_object_in_dict(key, key_data):
        if GlobalObjectsCarry.big_dictionary_data.get(key) is None:
            GlobalObjectsCarry.create_dict_object(key) 
        GlobalObjectsCarry.big_dictionary_data[key].dict_object[key_data] = []

    @staticmethod
    def create_int_object_in_dict(key, key_data):
        GlobalObjectsCarry.big_dictionary_data[key].dict_object[key_data] = 0

    @staticmethod
    def plus_to_dict_object_in_data(key, key_in_dict, value):
        GlobalObjectsCarry.big_dictionary_data[key] : DictObject
        if GlobalObjectsCarry.big_dictionary_data[key].dict_object.get(key_in_dict) is None:
            GlobalObjectsCarry.big_dictionary_data[key].dict_object[key_in_dict] = 0
        GlobalObjectsCarry.big_dictionary_data[key].dict_object[key_in_dict] += value

    @staticmethod
    def add_to_dict_object_in_data(key, key_in_dict, value):
        GlobalObjectsCarry.big_dictionary_data[key] : DictObject
        GlobalObjectsCarry.big_dictionary_data[key].add_to(key_in_dict, value)

    @staticmethod
    def get_from_dict_object_in_data(key, key_in_dict):
        return GlobalObjectsCarry.big_dictionary_data[key].dict_object[key_in_dict]

    @staticmethod
    def dict_in_function_get_it(key, pop_it = False):
        return GlobalObjectsCarry.big_dictionary_data[key].get_object(pop_it)

    @staticmethod
    def geo_title(logId) -> str:
        return f'{logId}_GEO'
