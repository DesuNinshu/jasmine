describe('formatErrorMsg', function() {
  it('should format an error with a domain', function() {
    const formatter = jasmineUnderTest.formatErrorMsg('api');
    expect(formatter('message')).toBe('api : message');
    expect(formatter('message2')).toBe('api : message2');
  });

  it('should format an error with a domain and usage', function() {
    const formatter = jasmineUnderTest.formatErrorMsg('api', 'with a param');
    expect(formatter('message')).toBe('api : message\nUsage: with a param');
    expect(formatter('message2')).toBe('api : message2\nUsage: with a param');
  });
});
