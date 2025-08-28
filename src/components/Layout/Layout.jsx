import {Outlet} from 'react-router-dom';
import BarraNavegacao from './BarraNavegacao';

function Layout(){
return(
<div className="min-h-screen bg-brand-background">
    <BarraNavegacao/>
    <main className="container mx-auto p-4 md:p-8">
        <outlet />
    </main>
</div>

)
}

export default Layout