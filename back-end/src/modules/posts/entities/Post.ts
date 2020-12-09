import 'reflect-metadata'
import  { Field, ObjectType } from 'type-graphql'

 type PostProps = {
  id: number;
  title: string;
  text: string;
  imagePath: string;
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
    id: number;
    
    @Field()
    title: string;

    @Field()
    text: string;

    @Field()
    imagePath: string;
}