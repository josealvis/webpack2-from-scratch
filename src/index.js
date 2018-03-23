require('./main.scss');

import _ from "lodash";
import notify from "./alertFunc";


var message = _.join(["webpack2", "vuejs", "lodash"], ", ");
var text  =` ${message} ok `;


var app = new Vue({
    el:"#app",
    data:{
        message : "Hello node",
        text
    }
});