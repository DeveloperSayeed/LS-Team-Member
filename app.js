const devs_form = document.getElementById("devs_form")
const output = document.querySelector(".output")

devs_form.addEventListener("submit", (e) => {

    e.preventDefault();

    let devs_name = document.querySelector('input[name="name"]')
    let team_img = document.querySelector("input[name= 'team-img']")
    let about = document.querySelector("input[name= 'about']")
    let facebook = document.querySelector("input[name= 'fb-link']")
    let twitter = document.querySelector("input[name= 'tw-link']")
    let instragram = document.querySelector("input[name= 'ins-link']")
    let linkdin = document.querySelector("input[name= 'lin-link']")
    let youtube = document.querySelector("input[name= 'you-link']")

    let skill = document.querySelectorAll("input[type= 'checkbox']:checked ")
    let gender = document.querySelector('input[type= "radio"]:checked ')
    let location = document.querySelector('select[name= "location"]')


    let img ="https://www.hiremystudio.co.uk/wp-content/uploads/2019/11/img-team-member-career-03.jpg"
    let namerexp = /^[a-zA-Z\s]{3,*}$/;
    let linkrexp = /^https:\/\/[^\s]+$/;
    console.log(linkrexp.test(img));


    if (namerexp.test(devs_name) == false || linkrexp.test(team_img) == false || aboutrexp.test(about) == false || linkrexp.test(team_img) == false || linkrexp.test(facebook) == false || linkrexp.test(twitter) == false || linkrexp.test(instragram) == false | linkrexp.test(linkdin) == false || linkrexp.test(youtube) == false || skill.value == false || gender.value == false || location.value == false) {

        devs_name.style.border='2px solid red'
        team_img.style.border='2px solid red'
        about.style.border='2px solid red'
        facebook.style.border='2px solid red'
        twitter.style.border='2px solid red'
        instragram.style.border='2px solid red'
        linkdin.style.border='2px solid red'
        youtube.style.border='2px solid red'

        gender.style.border='2px solid red'
        location.style.border='2px solid red'
        
    }



    let skill_arr = [];

    for (let i = 0; i < skill.length; i++) {
        skill_arr.push(skill[i].value)

    }
    console.log(skill_arr);

    let data_arry = [];
    if (getData('developer')) {
        data_arry = getData('developer')
    } else {
        data_arry = [];
    }
    data_arry.push({
        devs_name: devs_name.value,
        devImg: team_img.value,
        devBio: about.value,
        facebook: facebook.value,
        twitter: twitter.value,
        instragram: instragram.value,
        youtube: youtube.value,
        linkdin: linkdin.value,
        skill: skill_arr,
        gender: gender.value,
        location: location.value


    })


    sendData("developer", data_arry)

    allDevs()

})


allDevs()

function allDevs() {
    let deves = getData("developer")
    let data = '';
    deves.map((d) => {
        data += `
        <div class="col-lg-4 py-4">
        <div class="card">
            <img class="card-img-top img-thumbnail" src="${d.devImg}" alt="">
            <div class="card-body">
                <h2 class="card-title">${d.devs_name}</h2><hr>
                <p class="card-text">Gender: ${d.gender}</p>
                <p class="card-text">Skill: ${d.skill}</p>
                <p class="card-text">Location: ${d.location}</p>
                 <hr>
                <p class="card-text">${d.devBio}</p> <hr>
                <ul class="list-group">
                    <li>
                        <a href="${d.facebook}"><i class="fab fa-facebook-f"></i></a>
                        <a href="${d.twitter}"><i class="fab fa-twitter"></i></a>
                        <a href="${d.instragram}"><i class="fab fa-instagram-square"></i></a>
                        <a href="${d.linkdin}"><i class="fab fa-linkedin-in"></i></a>
                        <a href="${d.youtube}"><i class="fab fa-youtube"></i></a>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
        `;

    })
    output.innerHTML = data;

}