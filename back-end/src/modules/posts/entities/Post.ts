import 'reflect-metadata'
import  { Field, ObjectType } from 'type-graphql'

 type PostProps = {
  id: Number;
  title: String;
  text: String;
  imagePath: String;
}

@ObjectType()
export default class Post {
    constructor(props: PostProps) {
        this.id = props.id
        this.title = props.title
        this.text = props.text
        this.imagePath = props.imagePath
    }
    
    @Field()
    id: Number;
    
    @Field()
    title: String;

    @Field()
    text: String;

    @Field()
    imagePath: String;
}