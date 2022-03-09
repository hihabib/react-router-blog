import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListGroup, Container, Spinner } from 'react-bootstrap';
import styles from './Single.module.css';

const Single = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(function (response) {
            setPost(response.data);
        })
    }, [postId]);

    return (
        <Container>
            
            <ListGroup className="mt-5">
            <ListGroup.Item>
                
                
                {
                    Object.keys(post).length 
                    ? (
                        <>
                            <h3>{post.title}</h3><p>{post.body}</p>
                        </>
                    ) 
                    : (
                        <div className={styles.blogSpinner}>
                            <Spinner animation="border" />
                        </div>
                    )
                }
              
                


                
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Single;