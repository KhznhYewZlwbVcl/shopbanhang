<script>
    document.getElementById('newsletterForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // You can add your code here to handle the form submission, e.g., sending the email to the server.
        alert('Thank you for subscribing!');
        // Clear the input field after submission if needed
        document.getElementById('emailInput').value = '';
    });
</script>
