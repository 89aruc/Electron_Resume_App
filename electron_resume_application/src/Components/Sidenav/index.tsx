import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage } from 'Data/Selectors/Navigation';
import { SetActivePage } from 'Data/Actions/Navigation';
import { Pages } from 'Data/Objects/State';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { IconName } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faPlay, faFolder, IconDefinition  } from '@fortawesome/free-solid-svg-icons'
import 'Components/Sidenav/Sidenav.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ISidenavItem {
    key: string,
    page: Pages,
    iconName: IconDefinition
}

const sidenavItem: ISidenavItem[] = [
    {
        key: 'Home',
        page: Pages.HOME,
        iconName: faHouse
    },
    {
        key: 'Animations',
        page: Pages.ANIMATIONS,
        iconName: faPlay
    },
    {
        key: 'Components',
        page: Pages.COMPONENTS,
        iconName: faFolder
    },
]

export default function Sidenav() {
    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPage);
    const setCurrentPage = (page: Pages) => dispatch(SetActivePage(page));

    const renderSideNavItem = (item: ISidenavItem) => {
        const { key, page, iconName } = item;
        const compositeClass = [ 'item', currentPage === page ? 'selected' : '' ].join(' ');

        return (
            <div className={ compositeClass }
                key={ key }
                onClick={ () => setCurrentPage(page) }>
                    <FontAwesomeIcon icon={iconName} />
                    {/* { key } */}
            </div>
        )
    }

    return (
        <div className="sideNav">
            { sidenavItem.map(renderSideNavItem) }
        </div>
    )
}