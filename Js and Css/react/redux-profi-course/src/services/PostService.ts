import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPost} from "../models/IPost";

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        }),
    })
})

// при вызове функции createApi нам необходимо передать ряд некоторых опций

// - reducerPath - некоторый уникальный ключ который будет однозначно определять текущий сервис
// - baseQuery - здесь необходимо воспользоваться функцией fetchBaseQuery и в нее передать ряд опций,
// самое важное baseUrl, на который этот сервис будет отправлять запросы
// - endpoints - здесь описываем endpoints на которые мы будем отправлять запросы и как-то изменять наше состояние
// endpoint это функция, которая возвращает некоторый объект
// *** чтобы вернуть объект из стрелочной функции надо сделать так () => ({ object })
// уже в объекте как ключ мы указываем название метода с помощью которого мы будем получать или изменять какие-то данные
// а в значение этого ключа мы передаем результат вызова метода query или же mutation
// query - получаем данные get
// mutation - изменять данные post put

// query - будем принимать аргументы необходимые для запроса (тело запроса, какие-то параметры, какой-то url)