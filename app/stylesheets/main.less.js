@import '../../bower_components/bootstrap/less/bootstrap';
@import '../../bower_components/toastr/toastr';
@import (less) '../../bower_components/magnific-popup/dist/magnific-popup.css';

/*
 * Bootstrap overrides.
 */
@body-bg: #f0f3f4;
@text-color: #58666f;
@font-family-base: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
@link-color: #363f34;
@link-hover-color: #141718;

@navbar-default-bg: #fff;
@navbar-default-link-color: #353f44;
@navbar-default-link-hover-bg: #f6f7f7;
@navbar-default-link-active-bg: #f6f7f7;

@btn-default-color: #58666e;
@btn-default-border: #dee5e7;

@btn-primary-color: #fff;
@btn-primary-bg: #7266bb;
@btn-primary-border: #7266bb;

@btn-success-color: #fff;
@btn-success-bg: #27d24b;
@btn-success-border: #27d24b;

@btn-info-color: #fff;
@btn-info-bg: #23b7f5;
@btn-info-border: #23b7f5;

@btn-warning-color: #fff;
@btn-warning-bg: #fac732;
@btn-warning-border: #fac732;

@btn-danger-color: #fff;
@btn-danger-bg: #f15051;
@btn-danger-border: #f15051;

@panel-default-border: #dee5e7;
@panel-border-radius: 2px;
@panel-default-heading-bg: #f6f8f8;

@screen-sm: 800px;

html {
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 220px;
  -webkit-font-smoothing: antialiased;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #fff;
  background-color: #3b3f51;
}

footer a {
  color: #fff;
  text-decoration: underline;

  &:hover,
  &:focus {
    color: #fff;
    text-decoration: none;
  }
}

footer .thumb-md {
  border: 1px solid rgba(255,255,255,.15);
  transition: border .1s linear;

  &:hover {
    border-color: rgba(255,255,255,.3);
  }
}

.badge-danger {
  color: #fff;
  background-color: #f05150;
}

.badge-up {
  position: relative;
  top: -10px;
  padding: 2px 5px;
}

//.navbar-form .input-group-btn .btn-default {
//  padding: 9px 12px;
//}

.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
  margin-left: 0;
  border-left: 0;
}

/*
 * Character profile page styles.
 */

.profile {
  color: #fff;
  background-size: cover;
}

.profile.amarr {
  background-image: url('/img/amarr_bg.jpg');
}

.profile.caldari {
  background-image: url('/img/caldari_bg.jpg');
}

.profile.gallente {
  background-image: url('/img/gallente_bg.jpg');
}

.profile.minmatar {
  background-image: url('/img/minmatar_bg.jpg');
}

.profile footer {
  color: #fff;
  background: transparent;
  border-top: 1px solid rgba(255,255,255,.15);
}

.profile .navbar-default {
  background-color: transparent;
  border-bottom: 1px solid rgba(255,255,255,.15);
  box-shadow: none;
}

.profile .navbar-default .navbar-brand {
  color: #fff;
}


.profile .form-control {
  color: #fff;
  background: rgba(255,255,255,.15);
  border-color: rgba(255,255,255,.15);
  border-right: 0;

  &:focus {
    border-color: rgba(255,255,255,.3);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.055),0 0 8px rgba(255,255,255,.3);
  }
}

.profile .input-group-btn:last-child > .btn {
  margin-left: 0;
}

.profile .btn-default {
  color: #fff;
  background-color: rgba(255,255,255,.15);
  border-color: rgba(255,255,255,.15);
  transition: background-color .3s;

  &:focus,
  &:hover {
    color: #fff;
    background-color: rgba(255,255,255,.3);
  }
}


.profile .tri {
  border-top-color: #fff;

  &.invert {
    border-bottom-color: #fff;
  }
}

.profile .navbar-default .navbar-nav > .open > a,
.profile .navbar-default .navbar-nav > .open > a:hover,
.profile .navbar-default .navbar-nav > .open > a:focus {
  background-color: rgba(255,255,255,.15);
}

.profile .navbar-default .navbar-nav > li > a:hover,
.profile .navbar-default .navbar-nav > li > a:focus {
  color: #fff;
  background-color: rgba(255,255,255,.15);
}

.profile .navbar-default .navbar-nav > li > a {
  color: #fff;
}

.profile footer .col-sm-5 {
  border-right: 1px solid rgba(255,255,255,.15);
}


.table {
  font-size: inherit;
}

.table > thead > tr > th {
  padding: 8px 15px;
  border-bottom: 1px solid #eaeef0;
}

.table > tbody > tr > td {
  padding: 8px 15px;
  border-top: 1px solid #eaeef0;
}

.table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}

.list-group {
  border-radius: 2px;
}

.list-group .list-group-item {
  margin-bottom: 5px;
  border-radius: 3px;
}

.list-group-item:hover,
.list-group-item:focus {
  background-color: #f6f8f8;
}

.thumb-md {
  display: inline-block;
  width: 64px;
}

.thumb-lg {
  display: inline-block;
  width: 96px;
  margin-right: 15px;
}

.thumb-lg img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.position {
  font-size: 40px;
  font-weight: bold;
  color: #ddd;
  margin-right: 5px;
  line-height: 96px;
}

.btn {
  font-weight: 500;
  border-radius: 2px;
  outline: 0 !important;
}

.btn-addon i {
  position: relative;
  float: left;
  width: 34px;
  height: 34px;
  margin: -6px -12px;
  margin-right: 12px;
  line-height: 34px;
  text-align: center;
  background-color: rgba(0,0,0,.1);
  border-radius: 2px 0 0 2px;
}

.btn-addon i.pull-right {
  margin-right: -12px;
  margin-left: 12px;
  border-radius: 0 2px 2px 0;
}

.btn-addon.btn-sm i.pull-right {
  margin-right: -10px;
  margin-left: 10px;
}

.btn-default {
  box-shadow: 0 1px 1px rgba(91,91,91,.1);
}

.navbar {
  border: 0;
  box-shadow: 0 2px 2px rgba(0,0,0,.05), 0 1px 0 rgba(0,0,0,.05);
}

.navbar-default .navbar-brand {
  margin-left: 40px;
  font-size: 20px;
  font-weight: 700;
}

.dropdown-menu {
  box-shadow: 0 2px 6px rgba(0,0,0,.1);
}

.dropdown-submenu {
  position: relative;
}

.dropdown-submenu > .dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: 0;
  margin-left: 1px;
  border-radius: 0 6px 6px 6px;
}

.dropdown-submenu:hover > .dropdown-menu {
  display: block;
}

.dropdown-submenu > a:after {
  display: block;
  content: '';
  float: right;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-right-width: 0;
  border-left-color: #353f44;
  margin-top: 5px;
  margin-right: -10px;
}

.panel {
  box-shadow: 0 1px 1px rgba(0,0,0,.05);
}

.panel-default > .panel-heading {
  color: #333;
  font-weight: 700;
  border-color: #edf2f2;
}

.dropdown-submenu.pull-left {
  float: none;
}

.dropdown-submenu.pull-left > .dropdown-menu {
  left: -100%;
  margin-left: 10px;
  border-radius: 6px 0 6px 6px;
}

.form-control {
  border-color: #cfdadc;
  border-radius: 2px;

  &:focus {
    border-color: #24b7e4;
    box-shadow: none;
  }
}

.thumbnail {
  background-color: #fff;
  padding: 0;
  border-radius: 2px;
  border-color: #dee5e7;
  box-shadow: 0 1px 1px rgba(0,0,0,.05);
}

.thumbnail img {
  padding: 6px;
  border-radius: 2px 2px 0 0;
  border: 0;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: @btn-info-bg;
  }
  &:active {
    position: relative;
    top: 2px;
  }
}

.form-control {
  box-shadow: none;
}

label {
  font-weight: normal;
}


.profile-img {
  position: relative;
  margin-bottom: 20px;
  float: left;
  width: 256px;
  height: 256px;
  box-shadow: 0 2px 25px rgba(0,0,0,.25);
}

.profile-info {
  margin: 0 0 20px 286px;
  max-width: 405px;
  color: #fff;
}

.btn-transparent {
  border: 1px solid white;
  border-radius: 3px;
  padding: 10px 20px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;
  box-shadow: none;
  transition: background-color .3s;

  &:focus,
  &:hover {
    color: #fff;
    background-color: rgba(255,255,255,.3);
  }
}

.profile-stats {
  margin: 30px 0 30px 0;
  padding: 20px 0;
  border-top: 1px solid #2098ca;
  border-bottom: 1px solid #2098ca;
  border-top: 1px solid rgba(255,255,255,.15);
  border-bottom: 1px solid rgba(255,255,255,.15)
}


@media (max-width: 510px) {
  .profile-stats {
    font-size: 12px
  }
}

@media (max-width: 360px) {
  .profile-stats {
    padding: 10px 0
  }
}

.profile-stats {
  display: block;
  color: #fff
}

.profile-stats ul {
  list-style-type: none
}

.profile-stats li {
  position: relative;
  float: left;
  width: 33.3%;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  overflow: hidden
}

@media (max-width: 360px) {
  .profile-stats li {
    font-size: 10px
  }
}

.profile-stats li .stats-number {
  display: block;
  margin-bottom: 15px;
  font-size: 40px;
  font-weight: 600;
  line-height: 40px
}

@media (max-width: 360px) {
  .profile-stats li .stats-number {
    margin-bottom: 5px;
    font-size: 34px
  }
}

.profile-stats li:first-child:after {
  content: '';
  position: absolute;
  display: block;
  top: 50%;
  right: 0;
  margin-top: -27px;
  width: 1px;
  height: 55px;
  background: rgba(255,255,255,.15)
}

.profile-stats li:last-child:before {
  content: '';
  position: absolute;
  display: block;
  top: 50%;
  left: 0;
  margin-top: -27px;
  width: 1px;
  height: 55px;
  background: rgba(255,255,255,.15)
}

.profile-stats li.last-child:before {
  background: #fff
}

.radio {
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 20px;
}

.radio-inline + .radio-inline {
  margin-top: 10px;
}

.radio-inline,
.checkbox-inline {
  cursor: default;
}

.radio label {
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 5px;
  margin-right: 10px;
}

.radio label:before {
  content: '';
  display: inline-block;
  width: 17px;
  height: 17px;
  margin-left: -20px;
  position: absolute;
  left: 0;
  background-color: #fff;
  border: 1px solid #d0d0d0;
}

.radio label:before {
  bottom: 2.5px;
  border-radius: 100px;
  transition: border .2s 0s cubic-bezier(.45,.04,.22,1.30);
}

.radio input[type=radio]:checked + label:before {
  border-width: 5px;
}

.radio input[type=radio] {
  display: none;
}

.radio input[type=radio][disabled] + label {
  opacity: .65;
}

.radio input[type=radio]:checked + label:before {
  border-color: #10cebd;
}

.animated {
  animation-fill-mode: both;
  animation-duration: 1s;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInUp {
  animation-name: fadeInUp;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fadeIn {
  animation-name: fadeIn;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.fadeOut {
  animation-name: fadeOut;
}

@keyframes flipInX {
  0% {
    transform: perspective(800px) rotate3d(1,0,0,90deg);
    transition-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(800px) rotate3d(1,0,0,-20deg);
    transition-timing-function: ease-in;
  }

  60% {
    transform: perspective(800px) rotate3d(1,0,0,10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(800px) rotate3d(1,0,0,-5deg);
  }

  100% {
    transform: perspective(800px);
  }
}

.flipInX {
  backface-visibility: visible !important;
  animation-name: flipInX;
}

@keyframes flipOutX {
  0% {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1,0,0,-20deg);
    opacity: 1;
  }

  100% {
    transform: perspective(400px) rotate3d(1,0,0,90deg);
    opacity: 0;
  }
}

.flipOutX {
  animation-name: flipOutX;
  backface-visibility: visible !important;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  16.666% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes shake {
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    transform: translate3d(10px, 0, 0);
  }
}

.shake {
  animation-name: shake;
}

@tricolor: @link-color;
@triw: 10px;
@trih: @triw*0.9;

.triangles {
  position: absolute;
  top: 25px;
  left: 30px;
  height: @trih * 3;
  width: @triw * 3;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.navbar-brand:hover .tri {
  animation-play-state: paused;
}

.tri {
  position: absolute;
  animation: pulse 750ms ease-in infinite;
  border-top: @trih solid @tricolor;
  border-left: @triw/2 solid transparent;
  border-right: @triw/2 solid transparent;
  border-bottom: 0;

  &.invert {
    border-top: 0;
    border-bottom: @trih solid @tricolor;
    border-left: @triw/2 solid transparent;
    border-right: @triw/2 solid transparent;
  }
  &:nth-child(1) {
    left: @triw;
  }
  &:nth-child(2) {
    left: @triw/2;
    top: @trih;
    animation-delay: -125ms;
  }
  &:nth-child(3) {
    left: @triw;
    top: @trih;
  }
  &:nth-child(4) {
    left: @triw*1.5;
    top: @trih;
    animation-delay: -625ms;
  }
  &:nth-child(5) {
    top: @trih*2;
    animation-delay: -250ms;
  }
  &:nth-child(6) {
    top: @trih*2;
    left: @triw/2;
    animation-delay: -250ms;
  }
  &:nth-child(7) {
    top: @trih*2;
    left: @triw;
    animation-delay: -375ms;
  }
  &:nth-child(8) {
    top: @trih*2;
    left: @triw*1.5;
    animation-delay: -500ms;
  }
  &:nth-child(9) {
    top: @trih*2;
    left: @triw*2;
    animation-delay: -500ms;
  }
}

