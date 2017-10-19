console.log('js');

$(document).ready(main);

function main(){
  console.log('jq');
  $.ajax({
    method: 'GET',
    url: '/todo'
  })
  .done(function(response){
    console.log(response);
  })
  .fail(function(response){
    console.log('FAILURE');
  });
}