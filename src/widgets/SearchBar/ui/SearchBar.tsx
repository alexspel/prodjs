import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './SearchBar.module.scss';

interface SearchBarProps {
    className?: string;
    query?: string;
    onSearch?: (query: string) => void;
    disabled: boolean;
}

const SearchBar = memo((props: SearchBarProps) => {
    const {
        className,
        onSearch,
        query = '',
        disabled = false,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.SearchBar, {}, [className])}>
            <div className={cls.SearchBasWrapper}>
                <Input
                    value={query}
                    onChange={(value) => {
                        onSearch?.(value);
                    }}
                    disabled={disabled}
                    allowClear
                />
                {query && (
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={classNames(cls.clearBtn)}
                        onClick={() => {
                            onSearch?.('');
                        }}
                        disabled={disabled}
                    >
                        X
                    </Button>
                )}
            </div>
            <Button
                onClick={() => {
                    onSearch?.(query);
                }}
                disabled={disabled}
            >
                {t('Search')}
            </Button>
        </div>
    );
});

export default SearchBar;
