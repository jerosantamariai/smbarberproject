import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/home';
import NotFound from './views/notfound';
import Navbar from './components/navbar';
import AboutUs from './views/aboutus';
import OurServices from './views/ourservices';
import OurBarbers from './views/ourbarbers';
import Appointment from './views/appointment';
import Contact from './views/contact';
import LogIn from './views/login';
import Register from './views/register';
import Footer from './components/footer';
import Pricing from './views/pricing';
import Faq from './views/faq';
import Dashboard from './views/dashboard';
import Blogs from './views/blogs';
import Blog from './views/blog';
import Dashpass from './views/dashviews/dashpass';
import Dashuser from './views/dashviews/dashuser';
import DashAdminBlog from './views/dashviews/dashadminblog';
import DashAdminAppoint from './views/dashviews/dashadminappoint';
import DashAdminUser from './views/dashviews/dashadminuser';
import DashUserView from './views/dashviews/dashuserview';
import DashAppointView from './views/dashviews/dashappointview';
import DashContactView from './views/dashviews/dashcontactview';
import DashContacts from './views/dashviews/dashcontacts';

const App = props => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="col-md-9 offset-3">
        <div className="row">
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard/dashadminblog" component={DashAdminBlog} />
            <Route exact path="/dashboard/dashadminappoint/:app_email" component={DashAppointView} />
            <Route exact path="/dashboard/dashadminappoint" component={DashAdminAppoint} />
            <Route exact path="/dashboard/dashcontacts/:cont_email" component={DashContactView} />
            <Route exact path="/dashboard/dashcontacts" component={DashContacts} />
            <Route exact path="/dashboard/dashadminuser/:email" component={DashUserView} />
            <Route exact path="/dashboard/dashadminuser" component={DashAdminUser} />
            <Route exact path="/dashboard/dashuser" component={Dashuser} />
            <Route exact path="/dashboard/dashpass" component={Dashpass} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/blogs/:title" component={Blog} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/appointment" component={Appointment} />
            <Route exact path="/ourbarbers" component={OurBarbers} />
            <Route exact path="/ourservices" component={OurServices} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default injectContext(App)