const BlogPost = require('./blog-post')

class Blog {
    constructor() {
        this.postList = []
    }

    addBlogPost(bl) {
        this.postList.push(bl)
    }

    delete(num) {
        this.postList.splice(num,1);
    }

    update(num, bl) {
        this.postList[num] = bl;
    }
}