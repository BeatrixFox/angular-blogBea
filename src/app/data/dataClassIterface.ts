export class DataItem {
    id:string;
    photoCover: string;
    title: string;
    description: string

    constructor(id:string , photoCover:string , title:string, description:string){
       this.id = id
       this.title = title
       this.photoCover = photoCover
       this.description =description
    }
}
