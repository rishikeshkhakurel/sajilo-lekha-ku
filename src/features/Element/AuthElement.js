import {
  AppBar,
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import userSlice from "../../redux/slice/User.Slice";

const drawerWidth = 240;

const menu = [
  {
    name: "Customer",
    subcategoty: [
      { name: "Add customer", link: "/addCustomer" },
      { name: "Customer Detail", link: "/customerDetail" },
      { name: "Customer Ledger", link: "/customerLedger" },
      { name: "Customer Invoice", link: "/CustomerInvoice" },
    ],
  },

  {
    name: "Product",
    subcategoty: [
      { name: "Add product", link: "/addProduct" },
      { name: "Product Detail", link: "/productDetail" },
    ],
  },

  {
    name: "Tax",
    subcategoty: [
      { name: "Tax Detail", link: "/taxDetail" },
      { name: "Add Tax", link: "/addTax" },
      { name: "Pay Tax", link: "/payTax" },
    ],
  },
  {
    name: "Staff",
    subcategoty: [
      { name: "Add Salary", link: "/addSalary" },
      { name: "Pay Salary", link: "/paySalary" },

      { name: "Add Staff", link: "/AddStaff" },

      { name: "Staff Detail", link: "/staffDetails" },

      { name: "Staff Ledger", link: "/staffLedger" },
      
    ]
  },

  {
    name: "Loan",
    subcategoty: [
      { name: "Add loan", link: "/addLoan" },
      { name: "Pay principle", link: "/payPrinciple" },
      { name: "Pay interest", link: "/payInterest" },
      { name: "Loan Detail", link: "/loanDetail" },
      { name: "Interest Detail", link: "/interestDetail" },
    ],
  },

  {
    name: "Service Supplier",
    subcategoty: [
      { name: "Add service supplier", link: "/addServiceSupplier" },
      { name: "Service supplier Detail", link: "/serviceSupplierDetail" },
      { name: "Service supplier Ledger", link: "/serviceSupplierLedger" },

      { name: "Goods supplier Ledger", link: "/goodsSupplierLedger" },
      
     
     
    ]
  
  },

  {
    name: "Goods Supplier",
    subcategoty: [
      { name: "Add goods supplier", link: "/addGoodsSupplier" },
      { name: "Goods supplier detail", link: "/goodsSupplierDetail" },
    ],
  },

  {
    name: "Balance Sheet",
    link: "/BalanceSheet"
  },

  {
    name: "Fixed Asset",
    subcategoty: [
      { name: "Add asset", link: "/addAsset" },
      { name: "Sell Asset", link: "/sellAsset" },
      {
        name: "Add Depreciation",
        link: "/addDepreciation"
      },
      {
        name: "Display Asset",
        link: "/displayAsset"
      },
    ],
  },

 

];

const AuthElement = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [collapse, setcollapse] = useState("");
  const dispatch=useDispatch()

  const logoutHandler=()=>{
    localStorage.clear()
    dispatch(userSlice.actions.setData({ login: false }));

  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h2" sx={{ color: "white" }}>
            SajiloLekha
          </Typography>
          <Button color="secondary" sx={{ color: "white" }} onClick={()=>logoutHandler()}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      <Divider />
      <List sx={{marginTop:"80px"}}>
        {menu.map((category) => (
          <React.Fragment key={category.name}>
            {category.link ? (
              <Link to={category.link}>
                <ListItem
                  onClick={(e) => {
                    if (collapse === category.name) {
                      setcollapse("");
                    } else {
                      setcollapse(category.name);
                    }
                  }}
                  button
                >
                  <ListItemText>{category.name}</ListItemText>

                  {category.subcategoty && (
                    <KeyboardArrowDownIcon
                      sx={
                        collapse === category.name && {
                          transform: "rotate(180deg)",
                        }
                      }
                    />
                  )}
                </ListItem>
              </Link>
            ) : (
              <ListItem
                onClick={(e) => {
                  if (collapse === category.name) {
                    setcollapse("");
                  } else {
                    setcollapse(category.name);
                  }
                }}
                button
              >
                <ListItemText>{category.name}</ListItemText>

                {category.subcategoty && (
                  <KeyboardArrowDownIcon
                    sx={
                      collapse === category.name && {
                        transform: "rotate(180deg)",
                      }
                    }
                  />
                )}
              </ListItem>
            )}

            {category.subcategoty && (
              <Collapse
                in={collapse === category.name}
                unmountOnExit
                timeout="auto"
              >
                <List disablePadding>
                  {category.subcategoty.map((subcategory) => (
                    <Link to={subcategory.link} key={subcategory.name}>
                      <ListItem button>
                        <ListItemText button sx={{ pl: 4 }}>
                          {subcategory.name}
                        </ListItemText>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
        {/* "Product",
          "Damaged  Product",
          "Stock Details",
          "Order",
          "Statement", */}
        {/* <ListItem button>
          <ListItemText>Product</ListItemText>
        </ListItem>
        <Collapse in={true}>
          <List disablePadding>
            <ListItem button>
              <ListItemText button sx={{ pl: 4 }}>
                Add Product
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText button sx={{ pl: 4 }}>
                Delete Product
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText button sx={{ pl: 4 }}>
                Edit Product
              </ListItemText>
            </ListItem>
          </List>
        </Collapse> */}
        {/* <ListItem button>
          <ListItemText>Customer</ListItemText>
        </ListItem>
        <Collapse in={true}>
          <List disablePadding>
            <ListItem button>
              <ListItemText button sx={{ pl: 4 }}>
                Add Product
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText button sx={{ pl: 4 }}>
                Delete Product
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText button sx={{ pl: 4 }}>
                Edit Product
              </ListItemText>
            </ListItem>
          </List>
        </Collapse> */}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex", marginTop:"20px" }}>
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h2"
            noWrap
            component="div"
            sx={{ color: "white" }}
          >
            
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthElement;
