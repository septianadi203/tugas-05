

let blogs = []

function getData(event) {
    event.preventDefault()

    // Deklarasi variable sama dom buat nangkep valuenya
    let title = document.getElementById("name").value
    let startDate = document.getElementById("start-date").value
    let endDate = document.getElementById("end-date").value
    let description = document.getElementById("message").value
    let image = document.getElementById("input-upload").files
    
    // Deklarasi variable buat icon technology
    //Pengkondisian buat masukin images icon ke variable
    let nodeJsImg = (document.getElementById("nodeJs").checked == true)? 'assets/images/nodejs.png' : ""
    let reactJsImg = (document.getElementById("reactJs").checked == true)? 'assets/images/reactJs.png' : ""
    let javaScriptImg = (document.getElementById("javascript").checked == true)? './assets/images/javaScript.png' : ""
    let typeScriptImg = (document.getElementById("typeScript").checked == true)? './assets/images/typeScript.png' : ""

     image = URL.createObjectURL(image[0])

    //Mengdeklarasikan variable addBlog
    let addBlog = {
       title,
       startDate,
       endDate,
        description,
        nodeJsImg,
        reactJsImg,
        javaScriptImg,
        typeScriptImg,
        postedAt: new Date(),
        image

    }
    //Mempush value yang ada di project ke blogs
    blogs.push(addBlog)
    console.table(blogs)
     showData()
 }
// //------------- C ----------------//
//Merender data yang telah kita submit
function showData() {
     document.getElementById("card-box").innerHTML = ""
    //Loop
     for (let i= 0; i <= blogs.length; i++){
         document.getElementById("card-box").innerHTML += `
        <div class="project_item">
            <div class="project_img">
                <img src="${blogs[i].image}" alt="Avatar profil" id="image"/> 
            </div>
            <div class="project_content">
                <p class="title">
                    <a href="project-detail.html" target="_blank">${blogs[i].title}</a>
                </p>
                <p class="duration">Durasi: ${getDuration(blogs[i].startDate, blogs[i].endDate)}</p>
                <p class="description">${blogs[i].description}</p>
                <div class="technology">
                    <img src="${blogs[i].nodeJsImg}" alt="">
                    <img src="${blogs[i].reactJsImg}" alt="">
                    <img src="${blogs[i].javaScriptImg}" alt="">
                    <img src="${blogs[i].typeScriptImg}" alt="">
                </div>
                <div class="btn-group">
                    <button class="btn-edit">edit</button>
                    <button class="btn-delete">delete</button>
                </div>
            </div>                  
        </div>
        `
        
    }
}

//Fungsi menambahkan durasi waktu

function getDuration(start, end) {
    let Start = new Date(start)
    let End = new Date(end)

           //jarak waktu//
    let distance = End - Start

    let yearDistance = Math.floor(distance / (12 * 30 * 24 * 60 * 60 * 1000))
    if (yearDistance != 0) {
        return yearDistance + ' tahun'
    }else {
        let monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
        if (monthDistance != 0) {
            return monthDistance + ' bulan'
        } else {
            let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
            if (weekDistance != 0) {
                return weekDistance + ' minggu'
            } else {
                let daysDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
                if (daysDistance != 0) {
                    return daysDistance + ' hari'
                } else {
                    let hoursDistance = Math.floor(distance / (60 * 60 * 1000))
                    if (hoursDistance != 0) {
                        return hoursDistance + ' jam'
                    } else {
                        let minuteDistance = Math.floor(distance / (60 * 1000))
                        if (minuteDistance != 0) {
                            return minuteDistance + ' menit'
                        } else {
                            let secondDistance = Math.floor(distance / 1000)
                            if (secondDistance != 0)
                                return secondDistance + ' detik'
                        }
                    }
                }
            }
        }
    }

    
}