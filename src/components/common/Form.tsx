import { Box, Typography, FormControl, FormHelperText, TextareaAutosize, Stack, Select, MenuItem, Button, TextField, createTheme } from "@pankod/refine-mui";
import { FormProps } from "interfaces/common";
import { ThemeProvider } from "@pankod/refine-mui";

import CustomButton from "./CustomButton";

//Declaration of the mui theme for the TextField modification, in other case it will vanish and turn the border white
declare module '@mui/material/styles' {
    interface Theme {
        status: {
            info: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            info?: string;
        };
    }
}

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage }: FormProps) => {
    //Theme for the Text
    const theme = createTheme({
        status: {
            info: '#919191',
        },
    });

    return (
        <Box>
            <Typography
                fontSize={25}
                fontWeight={700}
                color="#11142d"
            >
                {type} a Property
            </Typography>
            <Box mt={2.5}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
            >
                <form style={{
                    marginTop: '20px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}
                    onSubmit={handleSubmit(onFinishHandler)}
                >
                    <FormControl>
                        <FormHelperText
                            sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d' }}
                        >Enter property name</FormHelperText>
                        {/*Here we apply the ThemeProvider for the custom TextField */}
                        <ThemeProvider theme={theme}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="info"
                                sx={{ borderColor: '#919191' }}
                                variant="outlined"
                                {...register('title', { required: true })}
                            />
                        </ThemeProvider>
                    </FormControl>
                    <FormControl>
                        <FormHelperText
                            sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d' }}
                        >Enter property name</FormHelperText>
                        <TextareaAutosize
                            minRows={5}
                            required
                            placeholder="Write description"
                            color="info"
                            style={{
                                fontFamily: 'Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                                width: '100%',
                                background: 'trasnparent',
                                fontSize: '16px',
                                borderColor: 'rgb(0,0,0,0.23)',
                                borderRadius: 6, padding: 10,
                                color: '#919191'
                            }}
                            {...register('description', { required: true })}
                        />
                    </FormControl>
                    <Stack direction="row" gap={4}>
                        <FormControl
                            sx={{ flex: 1 }}
                        >
                            <FormHelperText
                                sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d' }}
                            >
                                Select Property Type
                            </FormHelperText>
                            <ThemeProvider theme={theme}>
                                <Select
                                    variant="outlined"
                                    color="info"
                                    displayEmpty
                                    required
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    defaultValue="apartment"
                                    {...register('propertyType', { required: true })}
                                >
                                    <MenuItem value="apartment">Apartment</MenuItem>
                                    <MenuItem value="villa">Villa</MenuItem>
                                    <MenuItem value="farmhouse">Farm House</MenuItem>
                                    <MenuItem value="condos">Condos</MenuItem>
                                    <MenuItem value="townhouse">Townhouse</MenuItem>
                                    <MenuItem value="studio">Studio</MenuItem>
                                    <MenuItem value="duplex">Duplex</MenuItem>
                                    <MenuItem value="chalet">Chalet</MenuItem>
                                </Select>
                            </ThemeProvider>
                        </FormControl>
                        <FormControl>
                            <FormHelperText
                                sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d' }}
                            >Enter property price</FormHelperText>
                            {/*Here we apply the ThemeProvider for the custom TextField */}
                            <ThemeProvider theme={theme}>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-basic"
                                    color="info"
                                    type='number'
                                    //sx={{ borderColor: '#919191' }}
                                    variant="outlined"
                                    {...register('price', { required: true })}
                                />
                            </ThemeProvider>
                        </FormControl>
                    </Stack>
                    <FormControl>
                        <FormHelperText
                            sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d' }}
                        >Enter property location</FormHelperText>
                        {/*Here we apply the ThemeProvider for the custom TextField */}
                        <ThemeProvider theme={theme}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="info"
                                //sx={{ borderColor: '#919191' }}
                                variant="outlined"
                                {...register('location', { required: true })}
                            />
                        </ThemeProvider>
                    </FormControl>
                    <Stack
                        direction="column" gap={1} mb={2} justifyContent="center"
                    >
                        <Stack direction="row" gap={2}>
                            <Typography
                                color="#11142d" 
                                fontSize={16} 
                                fontWeight={500} 
                                my="10px"
                            >
                                Property Photo
                            </Typography>
                            <Button
                                component="label"
                                sx={{
                                    width: 'fit-content',
                                    color: '#2ed480',
                                    textTransform: 'capitalize',
                                    fontSize: 16
                                }}
                            >
                                Upload *
                                <input 
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    onChange={(e)=>{
                                        // @ts-ignore
                                        handleImageChange(e.target.files[0])
                                    }}
                                />
                            </Button>
                        </Stack>
                        <Typography
                            fontSize={14}
                            color="#808191"
                            sx={{
                                wordBreak: 'break-all'
                            }}
                        >
                            {propertyImage?.name}
                        </Typography>
                    </Stack>

                    <CustomButton 
                        type="submit"
                        title={formLoading ? 'Submitting...' : 'Submit'}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                    />
                </form>
            </Box>
        </Box>
    );
};

export default Form;