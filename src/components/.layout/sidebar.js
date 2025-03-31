import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';

export default function Sidebar({ onNavigate }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    const menuItems = [
        { name: 'Chat', icon: <ChatIcon />, id: 'chat' },
        { name: 'Users', icon: <PeopleIcon />, id: 'users' },
        { name: 'Settings', icon: <SettingsIcon />, id: 'settings' },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: isCollapsed ? 70 : 250,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: isCollapsed ? 70 : 250,
                    boxSizing: 'border-box',
                    backgroundColor: '#1f1f1f',
                    color: '#ffffff',
                },
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '10px' }}>
                <IconButton onClick={toggleSidebar} sx={{ color: '#ffffff' }}>
                    <MenuIcon />
                </IconButton>
            </Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton
                            onClick={() => onNavigate(item.id)}
                            sx={{
                                display: 'flex',
                                justifyContent: isCollapsed ? 'center' : 'flex-start',
                                '&:hover': { backgroundColor: '#333333' },
                            }}
                        >
                            <ListItemIcon sx={{ color: '#ffffff', minWidth: isCollapsed ? 'auto' : 40 }}>
                                {item.icon}
                            </ListItemIcon>
                            {!isCollapsed && <ListItemText primary={item.name} />}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
