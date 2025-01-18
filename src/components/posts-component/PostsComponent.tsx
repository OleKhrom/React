import {useEffect, useState} from "react";
import {getAll} from "../../services/general.api.service.ts";
import {IBaseResponceModel} from "../../models/IBaseResponceModel.ts";
import {IPost} from "../../models/IPost.ts";
import {PostComponent} from "./PostComponent.tsx";


export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getAll<IBaseResponceModel & { posts: IPost[] }>('posts')
            .then(({posts}) => setPosts(posts));
    }, []);
    return (
        <div>
            {posts.map( (post) => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};