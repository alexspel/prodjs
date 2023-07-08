import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './SearchBar.module.scss';

interface SearchBarProps {
    className?: string;
    query?: string;
    onChange?: (query: string) => void;
    onSearch?: (query: string) => void;
    disabled: boolean;
}

const SearchBar = memo((props: SearchBarProps) => {
    const {
        className,
        onChange,
        onSearch,
        query = '',
        disabled = false,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.SearchBar, {}, [className])}>
            <Input
                value={query}
                onChange={(value) => {
                    onChange?.(value);
                }}
                disabled={disabled}
            />
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
