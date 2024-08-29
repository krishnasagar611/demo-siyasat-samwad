import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { categoriesCacheData } from 'src/store/reducers/CatNavReducers';
import * as IconsModule from 'react-icons/fa';

const Sidebar = () => {
  const router = useRouter();
  const categories = useSelector(categoriesCacheData);

  const handleCategoryClick = (category) => {
    if (category.slug) {
      router.push(`/categories-news/${category.slug}`);
    }
  };

  const getIconComponent = (iconName) => {
    // Assuming the icon name in the category data is something like 'FaFire', 'FaNewspaper', etc.
    return IconsModule[iconName] || IconsModule.FaNewspaper;
  };

  return (
    <div style={{ width: '100%', padding: '10px', position: 'sticky', top: '0' }}>
      <ListGroup variant='flush'>
        {categories.map((category) => {
          const IconComponent = getIconComponent(category.icon);
          return (
            <ListGroupItem 
              key={category.id}
              className='d-flex align-items-center menu-item' 
              style={{ cursor: 'pointer' }}
              onClick={() => handleCategoryClick(category)}
            >
              <IconComponent style={{ marginRight: '10px', color: category.iconColor || '#FF5722' }} />
              <span>{category.category_name}</span>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Sidebar;