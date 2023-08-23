import express from 'express'
namespace Book{
    export interface item{
        id:number,
        title:string,
        author:string,
        publicationYear: number
        
    }
    export interface Response extends express.Response{
        send:(
            body:any|{
                page:number,
                pageSize:number,
                total:number,
                items:Array<Book.item>}
                
        )=>this
    }
    export interface Request extends express.Request {
        body:{
        id: number,
        title: string,
        author:string,
        publicationYear: number,
        },
        query:{
            id:any, 
            page:string,
            pageSize:string
        }
        
    }
}
export default Book;