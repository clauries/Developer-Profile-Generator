
function generateHTML(data) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${questions.name}</title>
    <script src="https://kit.fontawesome.com/c8926dbcdf.js" crossorigin="anonymous"></script>
    <style>
        @page {
          margin: 0;
        }

       *,
       *::after,
       *::before {
       box-sizing: border-box;
       }

       html, body {
       padding: 0;
       margin: 0;
       }

       html, body, .wrapper {
       height: 100%;
       }

       .wrapper {
       background-color: ${colors[data.color].wrapperBackground};
       padding-top: 100px;
       }

       body {
       background-color: white;
       -webkit-print-color-adjust: exact !important;
       font-family: 'Cabin', sans-serif;
       }

       main {
       background-color: #E9EDEE;
       height: auto;
       padding-top: 30px;
       }

       h1, h2, h3, h4, h5, h6 {
       font-family: 'BioRhyme', serif;
       margin: 0;
       }

       h1 {
       font-size: 3em;
       }

       h2 {
       font-size: 2.5em;
       }

       h3 {
       font-size: 2em;
       }

       h4 {
       font-size: 1.5em;
       }

       h5 {
       font-size: 1.3em;
       }

       h6 {
       font-size: 1.2em;
       }

       .photo-header {
       position: relative;
       margin: 0 auto;
       margin-bottom: -50px;
       display: flex;
       justify-content: center;
       flex-wrap: wrap;
       background-color: ${colors[data.color].headerBackground};
       color: ${colors[data.color].headerColor};
       padding: 10px;
       width: 95%;
       border-radius: 6px;
       }
       .photo-header img {
       width: 250px;
       height: 250px;
       border-radius: 50%;
       object-fit: cover;
       margin-top: -75px;
       border: 6px solid ${colors[data.color].photoBorderColor};
       box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
       }
       .photo-header h1, .photo-header h2 {
       width: 100%;
       text-align: center;
       }

       .photo-header h1 {
       margin-top: 10px;
       }

       .links-nav {
       width: 100%;
       text-align: center;
       padding: 20px 0;
       font-size: 1.1em;
       }

       .nav-link {
       display: inline-block;
       margin: 5px 10px;
       }

       .workExp-date {
       font-style: italic;
       font-size: .7em;
       text-align: right;
       margin-top: 10px;
       }
       
       .container {
       padding: 50px;
       padding-left: 100px;
       padding-right: 100px;
       text-align: center;
       }

       .row {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-around;
         align-items: center;
         margin-top: 20px;
         margin-bottom: 20px;
       }

       .card {
         padding: 25px;
         border-radius: 6px;
         background-color: ${colors[data.color].headerBackground};
         color: ${colors[data.color].headerColor};
         margin: 20px;
         width: 40%;
       }
       

       .col {
       flex: 1;
       text-align: center;
       }

       a, a:hover {
       text-decoration: none;
       color: inherit;
       font-weight: bold;
       }

       @media print { 
        body { 
          zoom: .75; 
        } 
       }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="photo-header">
            <div class="photo-header img">
                <img src="${profile-img}" alt="Profile Image">
            </div>
            <div class="greeting container">
                <h1 class="hi">Hi!</h1>
                <h2 class="name">My name is ${name}</h2>
                <h6 class="work">Currently working @ ${work}</h6>
                <div class="links-nav">
                    <div class="location nav-link"><i class="fas fa-location-arrow"></i>${location}</div>
                    <div class="github nav-link"><i class="fab fa-github-alt"></i>${github}</div>
                    <div class="blog nav-link"><i class="fas fa-rss"></i>${blog}</div>
                </div>
            </div>
        </div>
        <main>
        <div class="container stats">
            <div class="description row">
                <h3 class="col">${description}</h3>
            </div>
            <div class="row">
                <div class="repos card">
                    <div class="col">
                        <h3 class="repos-title a">Public Repositories</h3>
                        <h6 id="repos-num">${repoNum}</h6>
                    </div>
                </div>
                <div class="followers card sibling">
                    <div class="col">
                        <h3 class="followers-title a">Followers</h3>
                        <h6 id="followers-num">${followersNum}</h6>
                    </div>
                </div>
                <div class="stars card sibling">
                    <div class="col">
                        <h3 class="stars-title a">GitHub Stars</h3>
                        <h6 id="stars-num">${starsNum}</h6>
                    </div>
                </div>
                <div class="following card sibling">
                    <div class="col">
                        <h3 class="following-title a">Following</h3>
                        <h6 id="following-num">${followingNum}</h6>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
</body>
</html>`
}