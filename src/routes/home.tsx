import styled from "styled-components";
import PostTweetFrom from "../components/post-tweetofrom";
import { auth } from "../firebase";

const Wrapper = styled.div``;

export default function Home(){
    
    return (
        <Wrapper>
        <PostTweetFrom />
        </Wrapper>
    );
}