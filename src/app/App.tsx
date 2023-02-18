import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classnames/classnames';
import { Navbar } from 'widgets/Navbar/ui/Navbar';


const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames("app", { hovered: true, selected: true }, [theme])}>
            <button onClick={toggleTheme}>THEME</button>
            <Navbar />
        </div>
    );
};

export default App;
