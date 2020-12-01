"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostGatewayImpl {
    async getAll() {
        const posts = [
            {
                id: 1,
                title: "Hello World",
                text: "I am very happy learning typescript",
                imagePath: "https://www.teahub.io/photos/full/315-3150213_coffee-cup-wallpaper-cartoon.jpg"
            },
            {
                id: 2,
                title: "Hello World",
                text: "I am very happy learning typescript",
                imagePath: "https://www.teahub.io/photos/full/315-3150213_coffee-cup-wallpaper-cartoon.jpg"
            },
        ];
        return posts;
    }
}
exports.default = PostGatewayImpl;
