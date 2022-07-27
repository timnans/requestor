import { Controller } from "@hotwired/stimulus"
import {FetchRequest, get, post, put, patch, destroy } from "@rails/request.js"

export default class extends Controller {


  async destroyArticle(e){
    var id = e.target.id
    const response = await destroy("/articles/" + id) 
      if (response){
        console.log(response)
        // window.location.reload()
        // console.log("succcessful")

      }
  }
  async patchPosition(){
    const response = await patch(window. location.href, { body: JSON.stringify({ title: "this.sounkkkkd.seek()" }) })
    if (response.ok) {
      console.log("okay")
    }
  }
  async updatePosition(){
    const response = await put(window. location.href, { body: JSON.stringify({ title: "this.sound.seek()" }) })
    if (response.ok) {
      console.log("okay")
    }
  }

  async createData(){
    const response = await post(window. location.href , { body: JSON.stringify({ title: "From the console", content: "From the cosne" }) })
    if (response.okay) {
      console.log("Successful")
      
    }

  }
  async getIndexData(){
    const request = new FetchRequest('get',window.location.href + ".json")
    const response = await request.perform()

    if (response.ok){
      const body = JSON.parse(await response.text)
      console.log(body)
    }
  }

  async getShowData(){
    const response = await get(window.location.href + ".json")
    if (response.ok){
      const body = JSON.parse(await response.text)
      console.log(body)
    }
  }
  initialize() {
    // this.updatePosition()
//     this.createData()
//     this.getIndexData()
// this.getShowData()
// this.patchPosition() 
// this.destroyArticle() 
}
}
