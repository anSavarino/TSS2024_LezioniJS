export class Post{
    constructor(
        public id: number, 
        public title: string, 
        public body: string, 
        public userId: number, 
        public tags: string[], 
        public reactions: number
        ){}
}