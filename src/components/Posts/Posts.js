import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Spinner } from 'react-bootstrap';
import Navs from './../Navs/Navs';
import { NavLink } from 'react-router-dom';
import styles from './Posts.module.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            setPosts(response.data);
        })
    }, []);
    

    return (
        <Container>
            <Navs/>
            <ListGroup className="mt-5">


                {
                    posts.length 
                    ? posts.map(post => {
                        return (
                            <ListGroup.Item key={post.id}>
                                <NavLink to={`${post.id}`}><p>{post.title} the  id</p></NavLink>
                                </ListGroup.Item>
                            )
                        })
                    :  (
                        <div className={styles.blogSpinner}>
                            <Spinner animation="border" />
                        </div>
                    )
                }

          
               
             
            </ListGroup>
        </Container>
    );
};

export default Posts;