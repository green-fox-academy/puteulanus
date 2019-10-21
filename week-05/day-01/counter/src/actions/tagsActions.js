
// Add_Tag
function addTag(name) {
    return {type: 'Add_Tag', name}
}

// Remove_Tag
function removeTag(name) {
    return {type: 'Remove_Tag', name}
}

// Clean_Tag
function cleanTag() {
    return {type: 'Clean_Tag'}
}

export {addTag, removeTag, cleanTag}