import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


// upload a video 
export const uploadVideo = async (reqBody)=>{
    // make post http request to http://localhost:4000/videos to add video in json server and return response to Add Component
    return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}

// get all videos from json server
export const getAllVideos = async ()=>{
    // make get http request to http://localhost:4000/videos to get all videos from json server and return response component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

//  get an video from json server
export const getAVideo = async (id)=>{
    // make get http request to http://localhost:4000/videos/id to get a video from json server and return response to VideoCard component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

//  delete a video from json server
export const deleteAVideo = async (id)=>{
    // make get http request to http://localhost:4000/videos/id to remove a video from json server and return response to VideoCard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}


// store watching video history to json server
export const addToHistory = async (videoDetails)=>{
    // make post http request to http://localhost:4000/history to add video history in json server and return response to videoCard component
    return await commonAPI("POST",`${serverURL}/history`,videoDetails)
}

// get all watching video history from jason server
export const getAllHistory = async ()=>{
    // make get http request to http://localhost:4000/history to get video history from json server and return response to watch history component
    return await commonAPI("GET",`${serverURL}/history`,"")
}


// delete watched video history from json server
export const deleteHistory = async (id)=>{
    // make delete http request to http://localhost:4000/history/id to delete video history from json server and return response to watch history components
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}

// add a category to json server

export const addCategory = async (reqBody)=>{
    // make post http request to http://localhost:4000/categories to add category in json server and return response to category component
    return await commonAPI("POST",`${serverURL}/categories`,reqBody)
}


// get all categories from json server

export const getAllCategory = async ()=>{
    // make get http request to http://localhost:4000/categories to all category from json server and return response to category component
    return await commonAPI("GET",`${serverURL}/categories`,"")
}

// remove a category from json server
export const deleteCategory = async (id)=>{
    // make delete http request to http://localhost:4000/categories to delete category from json server and return response to category component
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}

// update a category from json server
export const updateCategory = async (id,body)=>{
    // make delete http request to http://localhost:4000/categories to delete category from json server and return response to category component
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
}