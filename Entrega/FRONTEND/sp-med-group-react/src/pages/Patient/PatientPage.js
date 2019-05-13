import React, { Component } from 'react';
import BottonLine from '../../components/Botton/BottomLine';
import TopLine from '../../components/Top/TopLine';

class PatientPage extends Component {

    render() {

        return (
<div>
<TopLine></TopLine>
<div>
    <p>Patient</p>
</div>
<BottonLine></BottonLine>
</div>
        );
    }
}

export default PatientPage;