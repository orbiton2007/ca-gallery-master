console.log('Starting up');

$(document).ready(onInit);

function onInit() {
    createProjects();
    renderProjects();
}


function renderProjects() {
    var strHTML = ''
    gProjects.forEach(function (proj) {
        strHTML += `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${proj.id}')" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div class="img-protfolio-grid">
            <img class="img-fluid" src="${proj.imgUrl}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
          </div>
        </div>`

    });
    $('.row-portfolio-grid').html(strHTML);
}


function renderModal(projId) {
    var proj = getProjById(projId);

    var strHTML = `<div class="row">
    <div class="col-lg-8 mx-auto">
      <div class="modal-body">
        <h2>${proj.name}</h2>
        <p class="item-intro text-muted">${proj.title}</p>
        <img class="img-fluid d-block mx-auto" src="${proj.imgUrl}" alt="">
        <p>${proj.desc}</p>
        <ul class="list-inline">
          <li><a href="${proj.url}" target="_blank">link</a></li>
          <li>Date: ${proj.publishedAt}</li>
          
        </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
          <i class="fa fa-times"></i>
          Close Project</button>
      </div>
    </div>
  </div>`

    $('.container-modal').html(strHTML);
}


function onSendDetails() {
    var email = $('.email-input').val();
    var subject = $('.subject-input').val();
    var body = $('.body-input').val();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}` ,'_blank');
//     window.location = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
//     target = "_blank";
}