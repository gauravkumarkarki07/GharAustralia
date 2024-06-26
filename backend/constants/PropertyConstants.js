export const facilities = [
    { 
        key: 'internet', 
        label: 'Internet', 
        options: [
            { label: 'Included', value: true },
            { label: 'Not Included', value: false }
        ], 
        default: false 
    },
    { 
        key: 'balcony', 
        label: 'Balcony', 
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false }
        ], 
        default: false 
    }
];

export const houseRules = [
    { 
        key: 'smokingAllowed', 
        label: 'Smoking Allowed', 
        options: [
            { label: 'Allowed', value: true },
            { label: 'Not Allowed', value: false }
        ], 
        default: false 
    },
    { 
        key: 'petAllowed', 
        label: 'Pet Allowed', 
        options: [
            { label: 'Allowed', value: true },
            { label: 'Not Allowed', value: false }
        ], 
        default: false 
    }
];

export const rentalTypes = [
    { 
        key: 'propertyType', 
        label: 'Property Type', 
        options: [
            { label: 'House', value: 'house' },
            { label: 'Apartment', value: 'apartment' }
        ], 
        default: 'house' 
    },
    { 
        key: 'rentType', 
        label: 'Rent Type', 
        options: [
            { label: 'Whole', value: 'whole' },
            { label: 'Sharing', value: 'sharing' },
            { label: 'Room', value: 'room' }
        ], 
        default: 'whole' 
    }
];
