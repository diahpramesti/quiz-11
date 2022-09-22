import { useDispatch, useSelector} from "react-redux";
import { fetchPosts } from "./postSlice";
import {Container, Button, Table} from "react-bootstrap";

const PostList = () => {
    const allPosts = useSelector((state) => state.posts.entities);
    const dispatch = useDispatch();
    const doFetchPosts = () => {
        dispatch(fetchPosts())
    }

    console.log('allPosts', allPosts)

    return (
        <Container>
            <h1>All Posts</h1>
            <div>
                <Button onClick={doFetchPosts}>get posts</Button>
            </div>
            <Table>
                <thead>
                <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Title</th>
                <th>Body</th>
                </tr>
                </thead>

                <tbody>
                    {allPosts.map((posts, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{posts?.userId}</td>
                            <td>{posts?.title}</td>
                            <td>{posts?.body}</td>

                        </tr>
                    ))}
                </tbody>
                

            </Table>
        </Container>
    )
}

export default PostList