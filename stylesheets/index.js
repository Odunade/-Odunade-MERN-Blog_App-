html {
    scroll-behavior: smooth;
}

body {
    width: 100%;
    font-family: "Nunito", sans-serif;
    margin: 5em 0;
    background: rgb(241, 251, 254);
    background: linear-gradient(93deg,
            rgba(241, 251, 254, 1) 16%,
            rgba(231, 249, 255, 1) 73%,
            rgba(200, 233, 255, 0.975) 100%);
}

*::selection {
    background: #114c70;
    color: white;
    text-shadow: -0.5px 0 rgb(255, 251, 0), 0 0.5px rgb(255, 251, 0),
        0.5px 0 rgb(255, 251, 0), 0 -0.5px rgb(255, 251, 0);
    /* Firefox 3.5+, Opera 9+, Safari 1+, Chrome, IE10 */
    filter: progid:DXImageTransform.Microsoft.Glow(Color=rgb(255, 251, 0), Strength=1);
}

/* Styling the spinner that indicates loading */
.spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100%;
    position: fixed;
    z-index: -999;
    top: 0;
    left: 0;
}

.spinner-border {
    width: 5em;
    height: 5em;
    color: #07a0ff;
}

/* All full stops in the app */

.full-stop {
    color: rgb(255, 251, 0);
    text-shadow: 2px 1px 2px rgba(255, 179, 0, 1);
}

/* All golden horizontal rules in the app */

.gold-hr {
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to right,
            rgba(0, 0, 0, 0),
            rgb(255, 251, 0),
            rgba(0, 0, 0, 0));
}

/* Navbar component */

.navbar-custom {
    opacity: 0.95;
    display: flex;
    flex: 1;
    left: 20px;
    right: 20px;
    top: 0.3em;
    position: fixed;
    height: 3.2em;
    z-index: 2;
    background-color: #07a0ff;
    -webkit-box-shadow: 7px 7px 5px -2px rgba(52, 162, 179, 1);
    -moz-box-shadow: 7px 7px 5px -2px rgba(52, 162, 179, 1);
    box-shadow: 7px 7px 5px -2px rgba(52, 162, 179, 1);
    border-radius: 0.4em;
    padding: 0.5em;
    opacity: 0.98;
}

.navbar-custom .navbar-brand {
    color: rgb(255, 251, 0);
}

.navbar-custom .navbar-brand:hover {
    color: white;
}

.navbar-item .nav-link {
    color: white;
    padding: 0.5em;
    margin: 0;
    border: 0.1em solid #07a0ff;
}

.navbar-item .nav-link:hover {
    color: rgb(255, 251, 0);
    border-radius: 0.4em;
    background: #114c70;
    border: 0.1em solid white;
}

.navbar-custom span .fa-bars {
    color: white;
    outline: none;
}

@media screen and (max-width: 990px) {
    .navbar-collapse {
        left: 0;
        top: 0;
        border-radius: 0.4em;
        background-color: #07a0ff;
        -webkit-box-shadow: 7px 7px 5px -2px rgba(52, 162, 179, 1);
        -moz-box-shadow: 7px 7px 5px -2px rgba(52, 162, 179, 1);
        box-shadow: 7px 7px 5px -2px rgba(52, 162, 179, 1);
        z-index: 2;
    }
}

/* Login component */

.login {
    font-weight: bold;
    font-size: larger;
    max-width: 400px;
    text-align: center;
    background: #07a0ff;
    color: white;
    padding: 1em;
    margin: 0 auto;
    border-radius: 0.4em;
    z-index: 2;
    -webkit-box-shadow: 3px 4px 5px -1px rgba(0, 81, 186, 1);
    -moz-box-shadow: 3px 4px 5px -1px rgba(0, 81, 186, 1);
    box-shadow: 3px 4px 5px -1px rgba(0, 81, 186, 1);
}

/* About component */
.about {
    color: white;
    font-size: larger;
    background: #07a0ff;
    border-radius: 0.4em;
    padding: 1em;
    -webkit-box-shadow: 3px 4px 5px -1px rgba(0, 81, 186, 1);
    -moz-box-shadow: 3px 4px 5px -1px rgba(0, 81, 186, 1);
    box-shadow: 3px 4px 5px -1px rgba(0, 81, 186, 1);
    z-index: 1;
}

.about>h1 {
    text-transform: uppercase;
    color: #114c70;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    /* Firefox 3.5+, Opera 9+, Safari 1+, Chrome, IE10 */
    filter: progid:DXImageTransform.Microsoft.Glow(Color=#ffffff, Strength=1);
}

/* Landing page's Jumbotron component*/

.jumbotron {
    background: #07a0ff;
    color: white;
    padding: 1.5em;
    margin: 0 auto;
    -webkit-box-shadow: 3px 4px 5px -1px rgba(0, 81, 186, 1);
    -moz-box-shadow: 3px 4px 5px -1px rgba(0, 81, 186, 1);
    box-shadow: 3px 4px 5px -1px rgba(0, 81, 186, 1);
    z-index: 1;
}

.jumbotron .display-4 {
    color: #114c70;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    /* Firefox 3.5+, Opera 9+, Safari 1+, Chrome, IE10 */
    filter: progid:DXImageTransform.Microsoft.Glow(Color=#ffffff, Strength=1);
    /* IE<10 */
}

.jumbotron main {
    font-size: large;
}

.jumbotron .btn-outline-primary {
    background: white;
    color: #07a0ff;
    border: 0.1em solid white;
    padding: 0.3em;
    z-index: 1;
}

.jumbotron .btn-outline-primary:hover {
    color: white;
    background: #0f4c72;
    border: 0.1em solid rgb(255, 251, 0);
}

/* Create new post's components */

.new-post {
    font-size: large;
}

.new-post>h1 {
    color: #07a0ff;
}

.new-post .new-title {
    color: #0f4c72;
    font-family: Nunito, "sans-serif";
}

.new-post input.btn-outline-primary {
    color: white;
    background: #0f4c72;
    z-index: 1;
    border: 0.1em solid rgb(255, 251, 0);
    padding: 0.5em;
}

.new-post input.btn-outline-primary:hover {
    background: white;
    color: #07a0ff;
    border: 2px solid #114c70;
    padding: 0.5em;
    z-index: 1;
}

.new-post .ck-editor__editable {
    font-family: "Noto Sans", sans-serif;
    min-height: 20em;
}

/*" Postlist component */

.posts-list #title {
    color: #07a0ff;
    text-shadow: -0.5px 0 #114c70, 0 0.5px #114c70, 0.5px 0 #114c70,
        0 -0.5px #114c70;
    /* Firefox 3.5+, Opera 9+, Safari 1+, Chrome, IE10 */
    filter: progid:DXImageTransform.Microsoft.Glow(Color=#114c70, Strength=1);
    font-weight: 800;
    margin: 0;
    padding: 0;
}

.posts-list .card {
    margin-top: 1em;
    border: 0;
}

.posts-list .card-body {
    padding: 1em;
    background: #0f4c72;
    border-radius: 0.4em;
    height: 100%;
    font-size: larger;
    -webkit-box-shadow: 3px 4px 5px -1px rgba(11, 102, 186, 0.84);
    -moz-box-shadow: 3px 4px 5px -1px rgba(11, 102, 186, 0.84);
    box-shadow: 3px 4px 5px -1px rgba(11, 102, 186, 0.84);
}

.posts-list .card-body:hover {
    cursor: pointer;
}

.posts-list .card a {
    color: white;
    outline: none;
}

.posts-list .card a:hover {
    color: white;
    outline: none;
    text-decoration: none;
    cursor: pointer;
}

.posts-list .btn-link {
    text-decoration: none;
    font-weight: bold;
    padding: 0;
    margin-top: 1em;
    font-size: larger;
    color: #07a0ff;
}

.posts-list .btn-link:hover {
    cursor: pointer;
    color: #0f4c72;
    text-shadow: 0px -1px 3px rgba(255, 251, 0, 0.95);
}

.alert {
    background: #0f4c72;
    color: whitesmoke;
    border: 0.1em solid rgb(255, 251, 0);
    border-radius: 0.4em;
    opacity: 0.9;
    padding: 1em;
    font-size: larger;
}

.alert:hover {
    opacity: 1;
    border: 0.1em solid #07a0ff;
}

.alert-close {
    color: white;
    padding-top: 1em;
    margin-bottom: 20px;
}

/* Individual Post component */

.post-title {
    color: rgb(255, 251, 0);
    font-weight: 800;
}

.card-body .author {
    color: white;
    opacity: 0.9;
}

.card-body time {
    display: flex;
    justify-content: space-between;
    color: rgb(255, 252, 70);
    opacity: 0.95;
    outline: none;
}

.card-body .read-time {
    color: white;
    opacity: 0.9;
    font-size: smaller;
}

.post .card-body {
    font-family: "Noto Sans", sans-serif;
    background: #114c70;
    color: white;
    padding: 1.5em 2em 1em 2em;
    border-radius: 0.4em;
}

.post .card-body .post-body {
    font-size: larger;
    text-shadow: none;
    padding-top: 0.5em;
}

.post .card-body .post-body a {
    color: rgb(255, 252, 70);
    text-decoration: underline;
}

.post .btn-outline-primary {
    color: white;
    background: #07a0ff;
    font-family: "Nunito", sans-serif;
    font-size: larger;
    border: 1px solid white;
}

.post .btn-outline-primary:hover {
    color: #114c70;
    background: white;
    font-family: "Nunito", sans-serif;
    font-size: larger;
    border: 1px solid rgb(255, 251, 0);
}

.post .btn-outline-danger {
    color: white;
    background: rgb(223, 13, 6);
    font-family: "Nunito", sans-serif;
    font-size: larger;
    border: 1px solid white;
}

.post .btn-outline-danger:hover {
    color: rgb(223, 13, 6);
    background: white;
    font-family: "Nunito", sans-serif;
    font-size: larger;
    border: 1px solid #07a0ff;
}

/* EditPost component */

.edit-post>h1 {
    color: #07a0ff;
    text-shadow: -0.5px 0 #114c70, 0 0.5px #114c70, 0.5px 0 #114c70,
        0 -0.5px #114c70;
    /* Firefox 3.5+, Opera 9+, Safari 1+, Chrome, IE10 */
    filter: progid:DXImageTransform.Microsoft.Glow(Color=#114c70, Strength=1);
}

.edit-post .edit-title {
    color: #114c70;
    font-size: large;
}

.edit-post .ck-editor__editable {
    font-family: "Noto Sans", sans-serif;
    font-size: larger;
}

.edit-post .btn-outline-primary {
    background: #114c70;
    color: white;
    border: 2px solid rgb(255, 251, 0);
}

.edit-post .btn-outline-primary:hover {
    background: white;
    color: #07a0ff;
    border: 2px solid #114c70;
}

/* CommentList component */

.comment-list:focus-visible {
    outline: none;
}

.comment-list hr {
    border: 0;
    height: 2px;
    background: #333;
    background-image: linear-gradient(to right, #eee, rgb(255, 251, 0), #eee);
    padding: 0;
    margin-top: 2em;
    margin-bottom: 2em;
}

.comment-heading {
    font-size: larger;
    font-weight: bold;
    color: #07a0ff;
    text-shadow: -0.5px 0 #114c70, 0 0.5px #114c70, 0.5px 0 #114c70,
        0 -0.5px #114c70;
    /* Firefox 3.5+, Opera 9+, Safari 1+, Chrome, IE10 */
    filter: progid:DXImageTransform.Microsoft.Glow(Color=#114c70, Strength=1);
    padding: 0;
    margin: 0;
    text-transform: uppercase;
}

/* Individual Comment component */

.comment {
    padding: 0.2em;
    margin: 0 0 8px 0;
    border: 0.5px solid rgb(255, 251, 0);
    -webkit-box-shadow: 0px 0px 3px 2px rgba(20, 92, 168, 1);
    -moz-box-shadow: 0px 0px 3px 2px rgba(20, 92, 168, 1);
    box-shadow: 0px 0px 3px 2px rgba(20, 92, 168, 1);
    border-radius: 10px 10px 31px 10px;
    -moz-border-radius: 10px 10px 31px 10px;
    -webkit-border-radius: 10px 10px 31px 10px;
}

.comment p {
    display: flex;
    padding: 0.5em;
    margin: 0;
    justify-content: flex-start;
    color: #114c70;
    font-size: 1.1rem;
}

.comment img {
    display: inline-flex;
    width: 60px;
    height: 60px;
    border-radius: 25%;
    border: 1px solid #08273a;
    padding: 0;
}

.comment .comment-body {
    padding-left: 1em;
}

/* Load more comments button */

.comment-list .btn-link {
    text-decoration: none;
    color: #07a0ff;
    padding: 0;
    margin: 0.5em 0;
}

.comment-list .btn-link:hover {
    cursor: pointer;
    color: #0f4c72;
    text-shadow: -2px -1px 0px rgba(255, 251, 0, 0.87);
}

/* The first comment text */

#first-comment {
    color: #0f4c72;
}

/* Comment input form */

.comment-form .form-control {
    display: inline-flex;
    justify-content: flex-start;
    border-radius: 0.4em;
    min-height: 3em;
    border: 1px solid #0f4c72;
    padding: 0.5em;
    margin: 0;
    text-align: start;
    color: #0f4c72;
    outline: none;
    font-size: large;
    letter-spacing: normal;
}

.comment-form .btn-outline-success {
    background: rgb(21, 182, 9);
    color: white;
    padding: 3px;
    border: 2px solid rgb(10, 141, 10);
}

.comment-form .btn-outline-success:hover {
    background: white;
    color: rgb(10, 141, 10);
    padding: 3px;
}

/* Footer component */

footer {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.95;
    z-index: 2;
    background-color: #08273a;
    color: white;
    text-align: center;
}

footer .fab {
    color: white;
    margin: 0 0.5em;
}

footer .fab:hover {
    color: rgb(255, 251, 0);
    cursor: pointer;
}

footer #rajat:hover {
    color: rgb(255, 251, 0);
}

/* Custom scroll bar */

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #114c70;
    border-radius: 20px;
}

::-webkit-scrollbar-thumb {
    border: 1px solid rgb(251, 255, 0);
    background: #07a0ff;
    border-radius: 20px;
}

/* Handling display of images after they are pasted into the editor */
figure.image img {
    display: block;
    margin: 20px auto;
    max-width: 80%;
    height: auto;
}

/* Disabling the image caption option */
.ck-content .image>figcaption {
    display: none;
}

/* Changing certain properties for mobile screens */
@media (max-width: 480px) {

    /* Reduceing padding for individual blog posts */
    .post .card-body {
        padding: 0.8em;
    }

    /* Reducing font-size for post title */
    .posts-list .card-body h1 {
        font-size: 2rem;
    }

    .card-body .read-time {
        display: inline-flex;
        color: white;
        opacity: 0.9;
        font-size: smaller;
    }

    /* Allowing image to take up more width on smaller screens */
    figure.image img {
        min-width: 100%;
        height: auto;
    }
}
