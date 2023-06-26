import styles from './headerfrontend.module.scss';
import classNames from 'classnames';

export interface HeaderfrontendProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Headerfrontend = ({ className }: HeaderfrontendProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['main-header']}>
                <div className={styles.search}>
                    <input />
                </div>
                <div className={styles.logo}>
                    <img
                        src="/uploads/cropped-OFB-Logo-New3.png"
                        alt="Logo"
                    />
                </div>
                <div className={styles.account}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                    />
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
