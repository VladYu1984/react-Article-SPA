import { Menu } from '@headlessui/react'
import { ReactNode } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DrppdownItems {
	content?: ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	href?: string;
}

interface DropdownProps {
	className?: string;
	items: DrppdownItems[];
	trigger: React.ReactNode;
	direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
	'bottom right': cls.optionsBottomRight,
	'bottom left': cls.optionsBottomLeft,
	'top right': cls.optionsTopRight,
	'top left': cls.optionsTopLeft,
}

export function Dropdown(props: DropdownProps) {
	const { className, items, trigger, direction="bottom right" } = props;

	const menuClasses = [mapDirectionClass[direction]];
	return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, { [cls.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
	)
}